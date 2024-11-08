let IDukol = 0; 

        function PridatUkol() {
            const ukol = document.getElementById('task-input');
            const tabulka = document.getElementById('task-list');
            
            if (ukol.value.trim() === "") {
                alert("Zadejte prosím text úkolu.");
                return;
            }

            IDukol++; 
            const pridani = document.createElement('li');
            pridani.textContent = ukol.value;
            pridani.id = "task-" + IDukol; 
            pridani.classList = '';
            
            tabulka.appendChild(pridani); 
            ukol.value = '';
            pridanitlacitek(pridani);

            pridani.onclick = function() {
                if (pridani.classList.contains('completed')) {
                    pridani.classList.remove("completed");
                } else {
                    pridani.classList.add('completed');
                }
        }}

        function pridanitlacitek(link) {
            const tlacitka = document.createElement('button');
            tlacitka.classList = 'smazat'; 
            tlacitka.textContent = 'Smazat'; 
            link.appendChild(tlacitka); 

           
            tlacitka.onclick = function() {
                link.remove()
            }
        }