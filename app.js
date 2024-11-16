
function calculate(width,long){
    let area = 0;
      area =  width *long;
    if(area == 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "กรุณากรอกตัวเลขก่อนการคำนวณ",
          });
    }else{
        Swal.fire({
            title: "คำนวณสำเร็จ",
            text: "คุณต้องซื้อกระเบื้องประมาณ "+" "+area+" "+"  ตารางเมตร",
            icon: "success"
          });
    }
    

   
}

