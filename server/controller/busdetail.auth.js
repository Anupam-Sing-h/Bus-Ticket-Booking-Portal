const { MongoClient } =require('mongodb');


const busdetails=async(req,res)=>{
    try {
     const client = await MongoClient.connect('mongodb://localhost:27017/');
     const coll =    client.db('Bus_ticket_booking').collection('bus_details');
     const data=req.body;
      await coll.insertOne(data)
      client.close();
      res.status(200).json("data is successfully registered")
    } catch (error) {
       res.send("Internal server error");
    }
 
 }
 const getbusinfo = async (req, res) => {
   try {
      
       const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
       const db = client.db('Bus_ticket_booking');
       const coll = db.collection('bus_details');
       
       
       const { source, destination, date } = req.query;
       
       
       const query = {};
       if (source) query.source = source;
       if (destination) query.destination = destination;
      
       
       
       const busInfo = await coll.find(query).toArray();
       
      
       await client.close();
       
      
       res.status(200).json(busInfo);
   } catch (error) {
      
       console.error(error);
       res.status(500).send("Internal server error");
   }
};

// const UpdateBus = async (req, res) => {
//     try {
//       const id = req.params.bus_id; 
  
//       const client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
//       const db = client.db('Bus_ticket_booking');
//       const coll = db.collection('bus_details');
  
    
//       const businfo = await coll.findOne({ busId: id });
  
//       if (businfo && businfo.availableSeats > 0) {
//         // Decrement available seats by 1
//         await coll.updateOne({ busId: id }, { $inc: { availableSeats: -1 } });
  
       
//         const updatedBus = await coll.findOne({ busId: id });
  
        
//         client.close();
  
        
//         res.status(200).json(updatedBus);
//       } else {
       
//         res.status(400).json({ message: 'No seats available' });
//       }
//     } catch (error) {
//       console.error('Internal server error', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };




const UpdateBus = async (req, res) => {
  let client;

  try {
    const id = req.params.bus_id;

    // Connect to MongoDB
    client = await MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('Bus_ticket_booking');
    const coll = db.collection('bus_details');

    // Find the bus info
    const businfo = await coll.findOne({ busId: id });

    if (businfo && businfo.availableSeats > 0) {
      // Decrement available seats by 1
      const updateResult = await coll.updateOne({ busId: id }, { $inc: { availableSeats: -1 } });

      if (updateResult.modifiedCount === 0) {
        // No document was updated
        return res.status(400).json({ message: 'Failed to update bus details' });
      }

      // Retrieve the updated bus information
      const updatedBus = await coll.findOne({ busId: id });

      // Respond with the updated bus information
      return res.status(200).json(updatedBus);
    } else {
      // No seats available or bus not found
      return res.status(400).json({ message: 'No seats available' });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    // Ensure the client is closed even if an error occurs
    if (client) {
      await client.close();
    }
  }
};

 

module.exports = { busdetails, getbusinfo, UpdateBus };


 




























 