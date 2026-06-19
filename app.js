// Variable global del estado de sesión local
let currentUser = null;

// Elementos de la interfaz
const btnCreateProfile = document.getElementById('btn-create-profile');
const usernameInput = document.getElementById('username-input');
const commentInput = document.getElementById('comment-input');
const btnSendComment = document.getElementById('btn-send-comment');
const profileBox = document.getElementById('profile-box');
const commentsContainer = document.getElementById('comments-container');
const stars = document.querySelectorAll('.star');
const ratingStatus = document.getElementById('rating-status');

// 1. LÓGICA DE REGISTRO DE PERFIL
if (btnCreateProfile) {
    btnCreateProfile.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username === "") {
            alert("¡Por favor ingresa un nombre de usuario!");
            return;
        }

        currentUser = "@" + username;

        // Renderizar estado conectado en el panel
        profileBox.innerHTML = `
            <div style="text-align:center; padding: 20px 0;">
                <div style="font-size: 40px;">👾</div>
                <h3 style="font-family:'Press Start 2P'; font-size:14px; margin:10px 0;">¡BIENVENIDO!</h3>
                <p class="user-tag" style="font-size:24px;">${currentUser}</p>
                <p style="font-size:16px; color:green;">Perfil temporal activo de forma local.</p>
            </div>
        `;

        // Activar la caja de comentarios
        commentInput.disabled = false;
        commentInput.placeholder = "Pregúntale algo a Gill en esta publicación...";
        btnSendComment.disabled = false;
        btnSendComment.style.background = "var(--yellow-retro)";
        btnSendComment.innerText = "ENVIAR PREGUNTA";
    });
}

// 2. LÓGICA DE ENVÍO DE COMENTARIOS
if (btnSendComment) {
    btnSendComment.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text === "") return;

        const newComment = document.createElement('div');
        newComment.className = 'comment-box';
        newComment.innerHTML = `<span class="user-tag">${currentUser}:</span> ${text}`;

        commentsContainer.appendChild(newComment);
        commentsContainer.scrollTop = commentsContainer.scrollHeight;

        commentInput.value = "";
    });
}

// 3. LÓGICA DE LAS ESTRELLAS DE CALIFICACIÓN
stars.forEach(star => {
    star.addEventListener('click', (e) => {
        const rating = e.target.getAttribute('data-value');
        
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= rating) {
                s.style.color = "var(--yellow-retro)";
            } else {
                s.style.color = "#000";
            }
        });

        ratingStatus.innerText = `¡Calificaste este producto con ${rating} estrellas!`;
        ratingStatus.style.color = "green";
    });
});
