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

    app.filter("language", function() {
        return function (projects, language) {

            if (!language) {
                return projects;
            }

            return projects.filter(function(project) {
                var languageIndex;

                for (languageIndex = 0; languageIndex < project.languages.length; languageIndex += 1) {
                    if (project.languages[languageIndex] === language) {
                        return true;
                    }
                    if (language === "Other" && project.languages[languageIndex].indexOf("Other") !== -1) {
                        return true;
                    }
                }

                return false;
            });
        };
    });

    app.controller("ProjectController", function () {
        var controller = this,
            projects = [
                {
                    name: "Ptolemy",
                    languages: ["Java", "C#"],
                    yearStart: 2009,
                    yearEnd: 2014,
                    description: "Written as a school project. Simulates the movement of the planets according to the first astronomer, Ptolemy: the earth stands still and the sun and planets orbit around it. Calculations accurate based on his exact measurements. Written once in Java, then lost, then rewritten in C#.",
                    source: {
                        url: "https://github.com/AmasaDelano/Ptolemy",
                        language: "C#"
                    },
                    download: {
                        fileName: "PtolemyJava.zip",
                        language: "Java"
                    }
                },
                {
                    name: "The Farmer Game",
                    languages: ["Basic/Other"],
                    yearStart: 2003,
                    yearEnd: 2008
                },
                {
                    name: "Color Clock",
                    languages: ["JavaScript", "CSS", "HTML"],
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
            ],
            languages = [
                "C#",
                "JavaScript",
                "HTML",
                "CSS",
                "Angular",
                "ASP.NET MVC",
                "Java",
                "jQuery",
                "Other"
            ];

        projects.sort(function (a, b) {
            return b.yearStart - a.yearStart || (b.yearEnd === null ? 1 : -1);
        });

        controller.list = projects;
        controller.languages = languages;

        (function () {
            var showFilters = false;

            controller.toggleFilters =  function () {
                showFilters = !showFilters;
            };

            controller.showFilters = function () {
                return showFilters;
            };
        }());

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