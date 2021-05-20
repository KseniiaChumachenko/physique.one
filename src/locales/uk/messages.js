/* eslint-disable */ export default {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        i10 = i.slice(-1),
        i100 = i.slice(-2);
      if (ord) return n10 == 3 && n100 != 13 ? "few" : "other";
      return v0 && i10 == 1 && i100 != 11
        ? "one"
        : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14)
        ? "few"
        : (v0 && i10 == 0) ||
          (v0 && i10 >= 5 && i10 <= 9) ||
          (v0 && i100 >= 11 && i100 <= 14)
        ? "many"
        : "other";
    },
  },
  messages: {
    "<0>Actions</0>": "<0>Actions</0>",
    "Add food": "Add food",
    "Add ingredient": "Add ingredient",
    "Add new food": "Add new food",
    "Add new meal": "Add new meal",
    "Always add attributes per 100g": "Always add attributes per 100g",
    Cancel: "Cancel",
    Carbohydrates: "Carbohydrates",
    "Carbohydrates (g)": "Carbohydrates (g)",
    "Energy (cal)": "Energy (cal)",
    "Energy (kJ)": "Energy (kJ)",
    "Energy (kcal|kJ)": "Energy (kcal|kJ)",
    Fats: "Fats",
    "Fats (g)": "Fats (g)",
    Food: "Food",
    "Library updated": "Library updated",
    Meals: "Meals",
    "Meals successfully updated": "Meals successfully updated",
    Name: "Name",
    Proteins: "Proteins",
    "Proteins (g)": "Proteins (g)",
    Ration: "Ration",
    "Select week of the year:": "Select week of the year:",
    Submit: "Submit",
    Summary: "Summary",
    "Time when meal was or will be consumed could be added later later. Selection of ingredients meal consist of, could be listed in FOOD LIBRARY tab and extended by <0>Add food</0> button.":
      "Time when meal was or will be consumed could be added later later. Selection of ingredients meal consist of, could be listed in FOOD LIBRARY tab and extended by <0>Add food</0> button.",
    Type: "Type",
    "Weight (g)": "Weight (g)",
    When: "When",
    "{0}": function (a) {
      return [a("0")];
    },
  },
};
