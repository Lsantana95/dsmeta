import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
import NotificationButton from '../NotificationButton'

function SalesCard() {

    return (

        <>
         <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                  <div className="dsmeta-form-control-container">
                  <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy" />
                  </div>
                  <div className="dsmeta-form-control-container">
                  <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy" />
                  </div>
                </div>

                <div>
                  <table className="dsmeta-sales-table">
                    <thead>
                      <tr>
                        <th className="show625">ID</th>
                        <th className="data">Data</th>
                        <th>Vendedor</th>
                        <th className="show625">Visitas</th>
                        <th className="show625">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="show625">#341</td>
                        <td className="data">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show625">15</td>
                        <td className="show625">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                          <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                          </div>
                       </td>
                      </tr>

                      <tr>
                        <td className="show625">#341</td>
                        <td className="data">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show625">15</td>
                        <td className="show625">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                          <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                          </div>
                        </td> 
                      </tr>

                      <tr>
                        <td className="show625">#341</td>
                        <td className="data">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="show625">15</td>
                        <td className="show625">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                          <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                          </div>
                        </td>  
                      </tr>

                    </tbody>

                  </table>
                </div>

              </div>
        </>
    )
}

export default SalesCard