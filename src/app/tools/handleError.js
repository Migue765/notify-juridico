const httpError = (res, err="Internal server error", code_error=500, internal_error="Internal server error") => {
    res.status(code_error);
    res.send({error: internal_error});
    console.log("error: ", err);
}

module.exports = { httpError };