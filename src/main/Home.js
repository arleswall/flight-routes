import React from "react";

function Home(){
    return(
        <div>
            <h3>Europe</h3>
                <table>
                  <tr>
                    <th>From</th>
                    <th>To</th> 
                    <th>Duration</th>
                    <th>First</th>
                    <th>Business</th> 
                    <th>Coach</th>
                  </tr>
                  <tr>
                    <td>London</td>
                    <td>LA</td>
                    <td>11h15m</td>
                    <td> </td>
                    <td>$357</td>
                    <td>$250</td>
                  </tr>
                  <tr>
                  <td></td>
                  <td>SFO</td>
                  <td>11h05m</td>
                  <td>$397</td>
                  <td>$357</td>
                  <td>$250</td>
                  </tr>
            </table>

        </div>
    )
}
export default Home;