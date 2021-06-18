export default function echoById(req,res) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({
  //   message: req.query.id
  // }))

  res.json({
      message: req.query.id
    })

}