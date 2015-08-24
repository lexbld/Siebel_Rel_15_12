if (typeof(SiebelAppFacade.SummaryPM) === "undefined") {

    SiebelJS.Namespace("SiebelAppFacade.SummaryPM");
    SiebelApp.S_App.RegisterConstructorAgainstKey("SummaryPModel", "SiebelAppFacade.SummaryPM");

    SiebelAppFacade.SummaryPM = (function() {
        function SummaryPM(proxy) {
            SiebelAppFacade.SummaryPM.superclass.constructor.call(this, proxy);
        }

        SiebelJS.Extend(SummaryPM, SiebelAppFacade.PresentationModel);

        SummaryPM.prototype.Init = function() {
            SiebelAppFacade.SummaryPM.superclass.Init.call(this);
            this.AddProperty("isEmailSet", "");
            this.AddMethod("FieldChange", OnFieldChange, {
                sequence: false,
                scope: this
            });
        };
		//function CheckGit(){}; // function not required.

        function OnFieldChange(control, value) {
            if (control.GetName() === "EmailAddress") {
                this.SetProperty("isEmailSet", (value ? true : false));
            }
        }
        return SummaryPM;
    }());
}