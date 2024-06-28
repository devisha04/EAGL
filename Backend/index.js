
require('dotenv').config();
const { beneficiary} = require("./schema");
const { volunteer } = require("./schema");
const {vendor } = require("./schema");
const {vet} = require("./schema");
const {goats} = require("./schema");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



app.post('/signup', async (req, res) => {
    const {username, password,name,age,contact,cart,address} = req.body;
    try {
        const newven = new vendor({ username,password,name,age,contact,cart,address});
        await newven.save();
        res.status(201).send('Sign up successful');
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).send('Error signing up');
    }
});
app.post('/login', async (req, res) => {
    const { username, password, userType } = req.body;
    console.log(userType);
    try {
        let user = null;
        switch (userType) {
            case 'vendor':
                user = await vendor.findOne({ username });
                break;
            case 'vet':
                user = await vet.findOne({ username });
                break;
            case 'volunteer':
                user = await volunteer.findOne({ username });
                break;
            default:
                return res.status(400).send({
                    error: 'Invalid role specified'
                });
        }
        if (!user) {
            return res.status(404).send({
                error: 'User not found'
            });
        }
        if (user.password == password){
            return res.status(200).send({
                message: 'Login successful',
                user
            });
        }
        return res.status(403).send({
            message : "Invalid creds"
        })
        
        

    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: 'An error occurred while logging in',
            details: error.message
        });
    }
});



app.post('/addgoat', async (req, res) => {
    const { gender, vaccination, breed, price, kids } = req.body;

    try {
        const newGoat = new goats({
            gender,
            vaccination,
            breed,
            price,
            kids
        });

        await newGoat.save();
        res.status(201).send('Goat added successfully');
    } catch (error) {
        console.error('Error adding goat:', error);
        res.status(500).send('Error adding goat');
    }
});

app.post('/addbeneficiary', async (req, res) => {
    const { name, contact, gender, age, location, status, goats, address } = req.body;

    try {
        const newBeneficiary = new beneficiary({
            name,
            contact,
            gender,
            age,
            location,
            status,
            goats,
            address
        });

        await newBeneficiary.save();
        res.status(201).send('Beneficiary added successfully');
    } catch (error) {
        console.error('Error adding beneficiary:', error);
        res.status(500).send('Error adding beneficiary');
    }
});

app.post('/addvolunteer', async (req, res) => {
    const { username,password,name, contact, age, gender, yoj, location, email } = req.body;

    try {
        const newVolunteer = new volunteer({
            username,
            password,
            name,
            contact,
            age,
            gender,
            yoj,
            location,
            email
        });

        await newVolunteer.save();
        res.status(201).send('Volunteer added successfully');
    } catch (error) {
        console.error('Error adding volunteer:', error);
        res.status(500).send('Error adding volunteer');
    }
});


app.post('/addvet', async (req, res) => {
    const {username,password, name, gender, contact, doj, location, schedule } = req.body;

    try {
        const newVet = new vet({
            username,
            password,
            name,
            gender,
            contact,
            doj,
            location,
            schedule
        });

        await newVet.save();
        res.status(201).send('Vet added successfully');
    } catch (error) {
        console.error('Error adding vet:', error);
        res.status(500).send('Error adding vet');
    }
});




app.get("/all_volunteers", async (req, res) => {
    try {
        const volunteers = await volunteer.find({}).select('name contact location');
        res.status(200).send({
            data: volunteers
        });
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching the beneficiary data.',
            details: error.message
        });
    }
});
app.get("/all_vendors", async (req, res) => {
    try {
        const vendors = await vendor.find({}).select('name');
        res.status(200).send({
            data: vendors
        });

    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching the beneficiary data.',
            details: error.message
        });
    }
});
app.get("/all_vet", async (req, res) => {
    try {
        // Fetch only the 'name' and 'location' fields from the all_vets collection
        const all_vetinfo = await vet.find({}).select('name location contact');

        res.status(200).send({
            data: all_vetinfo
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get("/all_beneficiary", async (req, res) => {
    try {
        // Fetch only the 'name' and 'location' fields from the all_beneficiary collection
        const beninfo = await beneficiary.find({}).select('name location age contact gender profit address');

        res.status(200).send({
            data: beninfo
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/livestocksale", async (req, res) => {
    try {
        const breeds = await goats.aggregate([
            {
                $group: {
                    _id: "$breed",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).send({
            data: breeds
        });
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching the livestock sale data.',
            details: error.message
        });
    }
});
app.get("/volunteer/:id", async (req, res) => {
    try {
        const {id} = req.params;
              
        const volunteerresponse = await volunteer.findOne({ _id : id });

        if (!volunteerresponse) {
            return res.status(404).send({
                error: 'Volunteer not found',
            });
        }
        res.status(200).send({
            data: volunteerresponse
        });
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching the volunteer profile.',
            details: error.message
        });
    }
});
app.get("/beneficiary/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const beneficiaryresponse = await beneficiary.findOne({_id : id});
        if (!beneficiaryresponse) {
            return res.status(404).send({
                error: ' Beneficiary  not found',
            });
        }
        res.status(200).send({
            data: beneficiaryresponse
        });
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while fetching the volunteer profile.',
            details: error.message
        });
    }
});
app.get("/vet/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const vetInfo = await vet.findOne({_id : id});
        if (!vetInfo) {
            return res.status(404).send({
                error: 'Vet not found',
            });
        }
        res.status(200).send({
            data: vetInfo
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            error: 'An error occurred while fetching the vet information.',
            details: error.message
        });
    }
});
app.patch("/beneficiary/update/:id", async (req, res) => {
    try {
        const beneficiaryId = req.params.id;
        const updateData = req.body;

        // Construct update query
        const updateQuery = { $set: updateData };

        // Execute update operation and retrieve updated document
        const options = { new: true };
        const beneficiaryresponse = await beneficiary.findOneAndUpdate(
            { _id: beneficiaryId },
            updateQuery,
            options
        );

        if (!beneficiaryresponse) {
            return res.status(404).send({
                error: 'Beneficiary not found',
            });
        }

        // Handle nested updates (e.g., goats array)
        if (updateData.goats && updateData.goats.length > 0) {
            for (const goatUpdate of updateData.goats) {
                await goat.findByIdAndUpdate(goatUpdate._id, goatUpdate, options);
            }
        }

        res.status(200).send({
            data: beneficiaryresponse
        });
    } catch (error) {
        res.status(500).send({
            error: 'An error occurred while updating the beneficiary data.',
            details: error.message
        });
    }
});
app.post('/goat/update/:id', async (req, res) => {
    try {
        const goatId = req.params.id;
        const updateData = req.body;

        // Execute update operation and retrieve updated document
        const options = { new: true }; // Return the updated document
        const updatedGoat = await goats.findByIdAndUpdate(
            goatId,
            updateData,
            options
        );

        if (!updatedGoat) {
            return res.status(404).send({
                error: 'Goat not found',
            });
        }

        res.status(200).send({
            data: updatedGoat,
            message: 'Goat updated successfully'
        });
    } catch (error) {
        console.error('Error updating goat:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(3000);