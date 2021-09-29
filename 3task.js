function Person(firstName, lastName, age) {
    var _firstName = firstName || "unknown";
    var _lastName = lastName || "unknown";
    var _age = age || 25;

    Object.defineProperties(this, {
        "FirstName": {
            get: function () { return _firstName },
            set: function (value) { _firstName = value }
        },
        "LastName": {
            get: function () { return _lastName },
            set: function (value) { _lastName = value }
        },
        "Age": {
            get: function () { return _age },
            set: function (value) { _age = value }
        }
    });

    this.getFullName = function () {
            return this.FirstName + " " + this.LastName;
    }
};

var person1 = new Person();
person1.FirstName = "raj";
person1.LastName = "kumar";
    
alert(person1.getFullName());
