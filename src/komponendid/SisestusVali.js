import './SisestusVali.css'

function SisestusVali({onViga, veatekst, silt, vaartus, setVaartus}) {
    let klassid = 'sisestusvali'
    let veatekstElement = <></>
    if (onViga) {
        klassid += ' viga'
        veatekstElement = (
            <div className='veateade'>
                {veatekst}
            </div>
        )
    }
    return (
        <div className={klassid} >
            <input 
                type="text" 
                placeholder={silt}
                value={vaartus}
                onChange={(event)=>setVaartus(event.target.value)}
            />
            {veatekstElement}
        </div>
    )
}

export default SisestusVali