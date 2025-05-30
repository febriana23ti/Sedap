export default function HelloWorld() {
    const propsUserCard = {
        nama: "Riana",
        nim: "2355301070",
        tanggal: "05/02/2005"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJS</p>
            <GreatingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Feb"
                nim="2355301070"
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard {...propsUserCard}/>

            <img src="img/kitten.jpg" alt="logo" />
        </div>
    )
}

function GreatingBinjai () {
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText () {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard (props) {
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}