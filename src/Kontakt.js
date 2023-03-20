import { useState } from "react"
import SisestusVali from "./komponendid/SisestusVali"

function Kontakt() {
    const [nimi, setNimi] = useState('')
    const [email, setEmail] = useState('')
    const [sisu, setSisu] = useState('')
    const [vead, setVead] = useState({
        nimi: '',
        email: ''
    })

    const valideeri = () => {
        let onKorras = true
        if (nimi.length < 1) {
            setVead( (eelmine) => ({...eelmine, nimi: 'Nimi on kohustuslik'}))
            onKorras = false
        } else {
            setVead( (eelmine) => ( {...eelmine, nimi: ''}) )
        }

        if (email.length < 1) {
            setVead( (eelmine) => ( {...eelmine, email: 'Email on kohustuslik'} ))
            onKorras = false
        } else if (!email.includes('@')) {
            setVead( (eelmine) => ( {...eelmine, email: 'Emaili formaat ei ole õige'} ))
            onKorras = false
        } else {
            setVead( (eelmine) => ( {...eelmine, email: ''} ))
        }

        if (onKorras) {
            console.log(
                {
                    nimi, email, sisu
                }
            )
        } else {
            console.log('????')
        }
    }
    return (
        <div>
            <h2>Võta meiega ühendust</h2>
            <div>
                <SisestusVali 
                    silt="Nimi"
                    veatekst={vead.nimi}
                    vaartus={nimi}
                    setVaartus={setNimi}
                    onViga={vead.nimi}
                />
                <SisestusVali 
                    silt="Email"
                    veatekst={vead.email}
                    vaartus={email}
                    setVaartus={setEmail}
                    onViga={vead.email}
                />
                <textarea 
                    onChange={(event) => setSisu(event.target.value) }
                    rows={10}
                    columns={50}
                >
                    {sisu}
                </textarea>
                <div>
                <button onClick={valideeri} >Saada</button>
                </div>
            </div>
        </div>
    )
}

export default Kontakt