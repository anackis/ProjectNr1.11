//jshint esversion:6

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pets');





const catSchema = new mongoose.Schema ({ 
	name: {
		type: String,
		required: [true, "Please enter name"]
	},
	rating: {
		type: Number, 
		min: 1,
		max: 10
	}
	});
const Cat = mongoose.model('Cat', catSchema);
// const kitty = new Cat({ name: 'Mjau'});

const dog = new Cat({
	name: "Error",
	rating: 2
});

const snake = new Cat({
	name: "Python",
	rating: 9
});


const ownerSchema = new mongoose.Schema ({ name: String, favouritePet: catSchema});
const Owner = mongoose.model('Owner', ownerSchema);
const ownername = new Owner({ name: 'Amy', favouritePet: dog});


snake.save();

Owner.updateOne({name: "BredPit"}, {favouritePet: snake}, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Succesfully updated the document! ");
	}
});




// dog.save();
// kitty.save();
// ownername.save();
// Owner.insertMany([BredPit, Jonifer, Anna], function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved owners");
//     }
// });

Cat.find(function(err, cats) {
	if (err) {
		console.log(err);
	} else {
		// mongoose.connection.close();
		cats.forEach(function(Cat) {
			const catName = Cat.name ;
			console.log(catName);
		});
	}
});

// Cat.updateOne({_id: "63505461aba2415f455fd65f"}, {name: "GoodCat"}, function(err) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("Succesfully updated the document! ");
// 	}
// });


// Cat.deleteOne({_id: "63505461aba2415f455fd65f"}, function(err) {});

// Cat.deleteMany({name: "Zildjian"}, function(err) {});





