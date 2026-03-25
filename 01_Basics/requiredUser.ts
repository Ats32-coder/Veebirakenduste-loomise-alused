type UserRequired = {
    //võin iga properti ette panna readonly
    //readonly on sellepärast, et ei saaks muuta
    //readonly id: string
    id: string
    name: string
    age: number
    //? - tähendab valikulist muutujat
    address?: {
        street: string
        city: string
    }
}

//kui hoiate T tähe peal hiirt, siis näed, et propertid on readonly-ks muudetud
type T = Readonly<UserRequired>

//oletame, et tahame, et see properti oleks kindlasti kasutatud
//vastupidime Partialile
function createUserWithAddress(user: Required<UserRequired>) {}

//nn külmutab kõik objekti sees ja ei saa kasutada
//Object.freeze()