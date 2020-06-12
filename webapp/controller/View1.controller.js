sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("RR.ViaCEP.controller.View1", {

		onInit: function () {
			this.sSearch = this.byId("search");
			this.oModel = new JSONModel();
			this.getView().setModel(this.oModel);
		},

		onSearch: function () {
			// @type sap.ui.model.Model
			var sValue = this.sSearch.getValue();
			this.oModel.loadData("https://viacep.com.br/ws/" + sValue + "/json/");
		},
		
		onDetailItem: function(oEvent){
			console.log("detalhe");
		}
		
		
	});
});