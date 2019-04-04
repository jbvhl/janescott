
module.exports = {
    login: (req, res) => {
        const confirmPass = process.env.CODE;
        const {password} = req.body;
        if (password === confirmPass) {
            return res.sendStatus(200);
        } else {
            return res.sendStatus(401)
        }
    }
}