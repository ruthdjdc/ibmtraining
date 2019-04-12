

function showTime() {
    document.getElementById('Name').innerHTML = document
                    .getElementById("name").value;
    document.getElementById('Age').innerHTML = document
                    .getElementById("age").value;
    document.getElementById('Gender').innerHTML =
                    document.querySelector('input[name="gender"]:checked').value;
  
}

                           export default showTime;