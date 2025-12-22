import Papa from "papaparse";
import upload_icon from '@/assets/img/logo/Upload.svg';

export default function ButtonList({ setPopUpClosed, addPerson }) {
    
    function importCsvHandler(e) {
        // Get csv file from clicked input
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            // Change name & role header -> person_name & person_role (to ensure same properties' name as person in persons array)
            transformHeader: (header) => {
                const cleanHeader = header.trim().replace(/^\uFEFF/, "");
                if (["Name", "name", "Nama", "nama"].includes(cleanHeader)) {
                    return "person_name";
                }
                if (["Role", "role"].includes(cleanHeader)) {
                    return "person_role";
                }
                return header;
            },
            // Handling csv covert results
            complete: (results) => {
                const csv_persons_array = results.data;

                // will be error if csv is empty AND csv column is not include name&role AND csv column > 2
                if (csv_persons_array.length > 0) {
                    const person_keys = Object.keys(csv_persons_array[0]);
                    if (
                        person_keys.length === 2 &&
                        person_keys.includes("person_name") &&
                        person_keys.includes("person_role")
                    ) {
                        addPerson(csv_persons_array);
                    } else {
                        alert(`CSV File's format is wrong`);
                    }
                } else {
                    alert(`CSV File is empty`);
                }

                // Clean csv file in HTML input
                e.target.value = null;
            },
        });
    }

    return (
        <div className="flex items-center gap-2">
            {/* Add button */}
            <button
                className="w-max cursor-pointer rounded-full bg-main-blue dark:bg-dark-purple-sky px-15 py-3 text-center text-3xl text-white"
                onClick={() => setPopUpClosed(false)}
            >
                Add
            </button>

            {/* Upload button */}
            <label
                htmlFor="csv-input"
                className="flex p-2 cursor-pointer items-center justify-center rounded-full bg-main-blue dark:bg-dark-purple-sky select-none"
            >
                <img src={upload_icon} alt="Upload" width={"36px"} draggable={false}/>
            </label>
            <input
                id="csv-input"
                type="file"
                name="csv-input"
                accept=".csv"
                className="hidden border"
                onChange={importCsvHandler}
            />
        </div>
    );
}
