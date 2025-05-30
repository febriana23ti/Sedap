import InputField from "./components/InputField"

export default function UserForm() {
    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <InputField label="Nama" type="text" placeholder="Silahkan ketik Nama..."/>
            <InputField label="Email" type="email" placeholder="Silahkan ketik EMail..."/>
            <InputField label="Tanggal Lahir" type="date" />
            </div>
        </div>
    )
}