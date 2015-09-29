/*global angular */
(function (app) {
    "use strict";

    app.controller("TabController", ["$rootScope", function ($rootScope) {
        var currentTab;

        $rootScope.select = function (tab) {
            currentTab = tab;
        };

        $rootScope.selected = function (tab) {
            return tab === currentTab;
        };

        $rootScope.select("projects");
    }]);

    app.controller("ProjectController", function () {
        var controller = this,
            projects = [
                {
                    name: "Ptolemy",
                    languages: ["Java", "C#"],
                    yearStart: 2009,
                    yearEnd: 2014
                },
                {
                    name: "The Farmer Game",
                    languages: ["Basic/Other"],
                    yearStart: 2003,
                    yearEnd: 2008
                },
                {
                    name: "Color Clock",
                    languages: ["Javascript", "CSS", "HTML"],
                    yearStart: 2015,
                    yearEnd: 2015,
                    site: "http://www.aluminumexperiment.com/colorclock"
                },
                {
                    name: "Costume Selector",
                    languages: ["C#", "JavaScript", "Angular", "CSS", "HTML", "ASP.NET MVC"],
                    yearStart: 2015,
                    yearEnd: 2015,
                    site: "http://www.gametable.me/costumes"
                },
                {
                    name: "Game Table",
                    languages: ["C#", "JavaScript", "CSS", "HTML", "ASP.NET MVC", "Angular", "jQuery"],
                    yearStart: 2015,
                    yearEnd: null,
                    site: "http://gametable.me"
                }
            ];

        controller.list = projects;

        controller.getYearText = function (project) {
            if (!project.yearEnd && project.yearStart) {
                return project.yearStart + " - present";
            }

            if (project.yearStart === project.yearEnd) {
                return project.yearEnd;
            }

            return project.yearStart + " - " + project.yearEnd;
        };
    });

}(angular.module("alexleone", [])));