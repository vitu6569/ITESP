import "./style/index.css"
import "../../style/index.css"


const data = [
    {
        id: 1,
        year: "2025",
        AccountAbilityPDF: [
            { path: "link" }
        ]
    },
    {
        id: 2,
        year: "2024",
        AccountAbilityPDF: [
            { path: "link" }
        ]
    },
    {
        id: 3,
        year: "2023",
        AccountAbilityPDF: [
            { path: "link" }
        ]
    },
    {
        id: 4,
        year: "2022",
        AccountAbilityPDF: [
            { path: "link" }
        ]
    },
]

const AccountAbility = () => {
    return (
        <div className="containerAccountAbility">
            <div className="content">
                <h1 className="titleContent h1">Prestação de Contas</h1>
                <div className="contentAccountAbility">
                    {data.map((item) => (
                        <div key={item.id}>
                            <h1 className="yearTitle">{item.year}</h1>
                            <ul className="list">
                                {item.AccountAbilityPDF.map((link, i) => (
                                    <li key={i} className="listChildren">
                                        <div className="circle"></div>
                                        <a className="linkPDF charcoal subtitleFont" target="_blank" href={link.path}>Prestação de Contas</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default AccountAbility