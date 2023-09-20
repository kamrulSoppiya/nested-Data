import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://graph.soppiya.biz/data",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                query:`
                query Get_countries {
                    get_countries {
                    currencies {
                        _id
                        name
                        conversion_rate
                        iso_4217_code
                    }
                }
            }
                `
            })
        })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('There was a problem fetching data:', error);
        setIsLoading(false); 
      });
  }, []); 

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li>{(data.data.get_countries.map(it=>
              console.log(it.currencies[0].name)
          ))}
          </li>
        </ul>
      )}
    </div>
  );
}

export default App;
