import WordModel from './../models/wordModel.js';


const createWord = async (req, res) => {
    const word = new WordModel(req.body);

    try{
        const createWord = await word.save();

        if(! createWord){
            return res.json({ message: 'Operation not successful'});
        }

        return res.status(201).json(createWord);

    }catch(error){
        console.log(error)
    }
}

const searchWord = async (req, res) => {

    const keyword = req.query.q;
    
    try{
        const searchWord = await WordModel.find({ $text: { $search: keyword }})

        if(! searchWord){
            return res.json({ message: 'Operation not successful'});
        }

        return res.status(200).json(searchWord);

    } catch(error){
        console.log(error)
    }

}





export { createWord, searchWord }