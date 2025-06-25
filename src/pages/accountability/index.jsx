import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

import "./style/index.css"
import "../../style/index.css"

const AccountAbility = () => {
  const [AccountAbility, setAccountAbility] = useState([]);
  useEffect(() => {
    const fetchAccountAbility = async () => {
      try {
        const snapshot = await getDocs(collection(db, "AccountAbility"));
        const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAccountAbility(dados);
      } catch (error) {
        console.error("❌ Erro ao buscar AccountAbility:", error);
      }
    };

    fetchAccountAbility();
  }, []);

    return (
        <div className="containerAccountAbility">
            <div className="content">
                <h1 className="titleContent h1">Prestação de Contas</h1>
                <div className="contentAccountAbility">
                    {AccountAbility.map((AccountAbility) => (
                        <div key={AccountAbility.id}>
                            <h1 className="yearTitle">{AccountAbility.year}</h1>
                            <ul className="list">
                                    <li className="listChildren">
                                        <div className="circle"></div>
                                        <a className="linkPDF charcoal subtitleFont" target="_blank" href={AccountAbility.AccountAbilityPDF}>Prestação de Contas</a>
                                    </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default AccountAbility