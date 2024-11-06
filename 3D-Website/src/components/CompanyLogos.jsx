import { companyLogos } from "../constants";

const CompanyLogos = ({ className })=>{
    <div className={className}>
        <h5 className={className}>
            Helping People create beautiful content at
        </h5>
        <ul className="flex">
            {companyLogos.map((logo, index)=>{
                <li className="flex items-center justify-center flex-1 h-[8.5rem" key={index}>
                    <img src={logo} width={134} height={28} alt={logo} />
                </li>
            })}
        </ul>
    </div>

}

export default CompanyLogos;