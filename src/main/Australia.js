import React from "react";

function Australia(){
    return(
        <div className="tableDiv">
            <h3 className="title">Australia</h3>
                  <table className="tableBox">
                    <tbody>
                      <tr>
                        <th>From/To</th> 
                        <th className="priceHeader"><i className="fa fa-clock-o" aria-hidden="true"></i></th>
                        <th className="priceHeader">F</th>
                        <th className="priceHeader">C</th> 
                        <th className="priceHeader">Y</th>
                      </tr>
                      <tr>
                         <td>&nbsp;</td>
                      </tr>
                       <tr>
                         <td className="location">Sydney</td>
                      </tr>
                       <tr>
                         <td>SFO</td>
                         <td>13h35m</td>
                         <td className="price"></td>
                         <td className="price">$310</td>
                         <td className="price">$158</td>
                    </tr>
                       <tr>
                         <td>LAX</td>
                         <td>13h50m</td>
                         <td className="price"></td>
                         <td className="price">$310</td>
                         <td className="price">$158</td>
                    </tr>
                       <tr>
                         <td>IAH</td>
                         <td>15h40m</td>
                         <td className="price"></td>
                         <td className="price">$310</td>
                         <td className="price">$158</td>
                    </tr>
                    <tr>
                       <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td className="location">Melbourne</td>
                      </tr>
                      <tr>                      
                      <td>LAX</td>
                      <td>14h15m</td>
                      <td className="price"></td>
                      <td className="price">$284</td>
                      <td className="price">$152</td>
                 </tr>
                    <tr>
                       <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td className="location">Auckland</td>
                      </tr>
                      <tr>
                      <td>SFO</td>
                      <td>12h20m</td>
                      <td className="price"></td>
                      <td className="price">$241</td>
                      <td className="price">$109</td>
                 </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Australia;