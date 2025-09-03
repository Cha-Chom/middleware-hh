export const validateCreatePostData = (req, res, next) => {
   
         //ข้อมูล Title, Content, Category และ Email
         //เป็นข้อมูลที่ Client จำเป็นต้องแนบมาให้
         if (!req.body.title) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Title ของแบบทดสอบเข้ามาด้วย"
            })
          }
          
          if (!req.body.content) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Content ของแบบทดสอบเข้ามาด้วย"
            })
          }
          
          if (!req.body.category) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Category ของแบบทดสอบเข้ามาด้วย"
            })
          } 
        
        if (!req.body.email) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Email ของผู้สร้างแบบทดสอบเข้ามาด้วย"
            })
          }

       //Content จะต้องมีความยาวอยู่ในระหว่าง 500 - 1000 ตัวอักษร
       if (req.body.content.length < 5 || req.body.content.length > 10) {
        return res.status(401).json({
             message: "กรุณาส่งข้อมูล Content ของโพสต์ตามที่กำหนดระหว่าง 500 - 1000 ตัวอักษร"
         })
        }

       //ข้อมูล Category จะต้องมีค่าเป็น String "Math", "English" และ "Biology" เท่านั้นt 
       const normalizedCategory = req.body.category.trim().toLowerCase();
       const categoryList = ["math", "english", "biology"];
       if (!categoryList.includes(normalizedCategory)) {
           return res.status(401).json({
               message: "กรุณาส่งข้อมูล Category ของโพสต์ตามที่กำหนด ได้แก่ 'Math', 'English' หรือ 'Biology' เท่านั้น"
           });
       }

        //Email ของผู้สร้างแบบทดสอบจะต้องมีรูปแบบ Email ที่ถูกต้อง
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(req.body.email)) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Email ของผู้สร้างแบบทดสอบตามรูปแบบ Email ที่ถูกต้อง"
            })
        }
       
       next()
};