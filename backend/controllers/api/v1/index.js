
import db_connect from "../../../config/mongodb.js"

const db = await db_connect();

const getFormData = async (req, res) => {
    try {
        const formData = await db.formCollection.find().toArray();

        await res.status(200).send(formData);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getBookData = async (req, res) => {
    try{

        if(!req.body){
            res.status(400).json({ error: 'Bad Request' });
        }

        const answer1 = req.body.question1;
        const answer2 = req.body.question2;

        const result = answer1 + answer2;

        const booksDataArray = await db.booksCollection.find().toArray();
        
        if (booksDataArray.length === 0) {
            res.status(200).json({ message: "No books found for the selected options", books: [] });
            return;
        }

        const booksData = booksDataArray[0].booksData;

        const selectedBooks = booksData.find((item) => item.id === result);

        if (!selectedBooks) {
            res.status(200).json({ message: "No books found for the selected options", books: [] });
            return;
        }
        

        await res.status(200).json({
            message: "Success!",
            books: selectedBooks.books,
        });

    } catch (error){
        console.error('Error fetching book data:', error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {getFormData, getBookData};