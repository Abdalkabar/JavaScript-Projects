// Create a dictionary (JavaScript object) with key-value pairs
let myDictionary = {
    name: "John Doe",
    age: 30,
    city: "New York",
    profession: "Developer"
};

// Function to display a value from the dictionary
function displayDictionaryValue() {
    // Delete the 'age' property from the dictionary
    delete myDictionary.age;
    // Display the deleted value or confirmation
    document.getElementById("Dictionary").innerHTML = "The 'age' property has been deleted from the dictionary.";
}