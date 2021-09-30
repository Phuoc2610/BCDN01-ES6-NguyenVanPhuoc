let ketQua = 0;
let tinhDiem = (...nums) => {
    let sum = 0;
    nums.map((num) => {
        sum += num;
    })
    ketQua = (sum / nums.length).toFixed(2);

}
let diemTB1 = () => {
    let diemToan = Number(document.getElementById("inpToan").value);
    let diemLy = Number(document.getElementById("inpLy").value);
    let diemHoa = Number(document.getElementById("inpHoa").value);
    tinhDiem(diemHoa, diemLy, diemToan);
    document.getElementById("tbKhoi1").innerHTML = ketQua;
}
let diemTB2 = () => {
    let diemVan = Number(document.getElementById("inpVan").value);
    let diemSu = Number(document.getElementById("inpSu").value);
    let diemDia = Number(document.getElementById("inpDia").value);
    let diemAnh = Number(document.getElementById("inpEnglish").value);
    tinhDiem(diemVan, diemSu, diemDia, diemAnh);
    document.getElementById("tbKhoi2").innerHTML = ketQua;
}
document.getElementById("btnKhoi1").addEventListener("click", diemTB1);
document.getElementById("btnKhoi2").addEventListener("click", diemTB2);


