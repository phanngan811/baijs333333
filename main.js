function ketQua(){
    var diemChuan = document.getElementById("diemChuan").value;
    var diemToan = document.getElementById("diem1").value;
    var diemVan = document.getElementById("diem2").value;
    var diemAnh = document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;

    diemChuan = parseInt(diemChuan);
    diemToan = parseInt(diemToan);
    diemVan = parseInt(diemVan);
    diemAnh = parseInt(diemAnh);
    khuVuc = parseInt(khuVuc);
    doiTuong = parseInt(doiTuong);

    var diemThiSinh = 0
    
    diemThiSinh = diemMon(diemToan, diemVan, diemAnh) + haiDiemUuTien(khuVuc, doiTuong);
    // diemThiSinh = parseInt(diemThiSinh)
    
    var ketQua = 0
    if (diemThiSinh >= diemChuan && diemAnh!= 0 && diemToan != 0&& diemVan != 0){
        ketQua = diemThiSinh + " Thí sinh đã đậu"
    }else{
        ketQua = diemThiSinh + " Thí sinh đã rớt"
    }


    document.getElementById("thongBao").innerHTML = ketQua;
}


function diemMon(x, y, z){
    
    var diemMon = x + y +z;

return diemMon;


}

function haiDiemUuTien(a,b){
    var khuVuc1 = 0
    var doiTuong1 = 0

    switch(a){
        case 1:
            khuVuc1 === 0.5
            break;
        case 2:
            khuVuc1 === 1
            break;
        case 3:
            khuVuc1 === 2
            break;
    }

    switch(b){
        case 1:
            doiTuong1 === 1
            break;
        case 2:
            doiTuong1 === 1.5
            break;
        case 3:
            doiTuong1 === 2.5
            break;
    }

    var diemUuTien = a +b 

    return diemUuTien;
}






function tienDien() {
    var ten = document.getElementById("ten").value;
    var KW  = document.getElementById("soKW").value;

    KW = parseInt(KW)
    var tienDien =ten +  " Tổng số tiền điện là: " + soTienDien(KW) +" đồng"
    document.getElementById("thongBao2").innerHTML = tienDien
}


function soTienDien(a){
    var tongTien = 0;

    if (a >0 && a<50){
        tongTien = a * 500
    }else if (a>=50 && a<100){
        tongTien = (49 * 500) + ((a-49)*650)
    }else if (a>=100 && a<200){
        tongTien = (49 * 500)+(50 * 650) +((a - 99)*850)
    }else if (a>=200 && a<350){
        tongTien = (49* 500) + (50 * 650) + (100*850) + ((a - 199) * 1100)
    }else if (a>=350){
        tongTien = (49* 500) + (50 * 650) + (100*850) + (149 *1100) +((a - 349)*1300)
    }

return tongTien
}






function tongTien(){
    var nhaDan = document.getElementById("nhaDan").checked;
    var doanhNghiep = document.getElementById("doanhNghiep").checked;
    var maKhachHang = document.getElementById("ma").value;
    var soKhachHang = document.getElementById("so").value;
    var hoaDon = document.getElementById("hoaDon").value;
    var ketNoi = document.getElementById("ketNoi").value;
    var kenh = document.getElementById("kenh").value;


    hoaDon = parseInt(hoaDon);
    ketNoi = parseInt(ketNoi);
    kenh = parseInt(kenh);


    var phi = 0;
    if(nhaDan === true){
        phi = hoaDon*4.5 + ketNoi*20.5 + kenh*7.5
    }if(doanhNghiep === true && ketNoi>0 && ketNoi<=10){
        phi = hoaDon*15 + ketNoi*75 + kenh*50
    }if(doanhNghiep === true && ketNoi>10){
        phi = hoaDon*15 + 10*75 + (ketNoi-10)*5 + kenh*50
    }

    var tongPhi = "Tổng hoá đơn của khách hàng là: " + phi + "$"
    document.getElementById("thongBao3").innerHTML=tongPhi;

}

