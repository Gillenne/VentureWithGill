let currentUser = null;
let isAdmin = false;

const btnCreateProfile = document.getElementById('btn-create-profile');
const usernameInput = document.getElementById('username-input');
const commentInput = document.getElementById('comment-input');
const btnSendComment = document.getElementById('btn-send-comment');
const profileBox = document.getElementById('profile-box');
const commentsContainer = document.getElementById('comments-container');
const stars = document.querySelectorAll('.star');
const ratingStatus = document.getElementById('rating-status');

if (btnCreateProfile) {
    btnCreateProfile.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username === "") {
            alert("¡Por favor ingresa un nombre de usuario!");
            return;
        }

        if (username.toLowerCase() === "gill_admin") {
            currentUser = "@Gill";
            isAdmin = true;
        } else {
            currentUser = "@" + username;
            isAdmin = false;
        }

        if (isAdmin) {
            profileBox.innerHTML = `
                <div style="text-align:center; padding: 20px 0;">
                    <div style="font-size: 40px;">👑</div>
                    <h3 style="font-family:'Press Start 2P'; font-size:14px; margin:10px 0; color:#ffcc00;">MODO AUTORA</h3>
                    <p class="user-tag" style="font-size:24px; color:#662d91;">${currentUser}</p>
                    <p style="font-size:16px; color:blue; font-weight:bold;">¡Tienes el control total de la web!</p>
                </div>
            `;
            commentInput.disabled = false;
            commentInput.placeholder = "Escribe tu nueva publicación del día como Gill...";
            btnSendComment.disabled = false;
            btnSendComment.style.background = "var(--yellow-retro)";
            btnSendComment.innerText = "PUBLICAR COMO GILL 📢";
        } else {
            profileBox.innerHTML = `
                <div style="text-align:center; padding: 20px 0;">
                    <div style="font-size: 40px;">👾</div>
                    <h3 style="font-family:'Press Start 2P'; font-size:14px; margin:10px 0;">¡BIENVENIDO!</h3>
                    <p class="user-tag" style="font-size:24px;">${currentUser}</p>
                    <p style="font-size:16px; color:green;">Perfil temporal activo localmente.</p>
                </div>
            `;
            commentInput.disabled = false;
            commentInput.placeholder = "Pregúntale algo a Gill en esta publicación...";
            btnSendComment.disabled = false;
            btnSendComment.style.background = "var(--yellow-retro)";
            btnSendComment.innerText = "ENVIAR PREGUNTA";
        }
    });
}

if (btnSendComment) {
    btnSendComment.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text === "") return;

        if (isAdmin) {
            const announcementText = document.querySelector('.announcement-box p');
            if (announcementText) {
                announcementText.innerText = text;
                alert("¡Has actualizado tu estado del Daily Venture!");
            }
        } else {
            const newComment = document.createElement('div');
            newComment.className = 'comment-box';
            newComment.innerHTML = `<span class="user-tag">${currentUser}:</span> ${text}`;
            commentsContainer.appendChild(newComment);
            commentsContainer.scrollTop = commentsContainer.scrollHeight;
        }
        commentInput.value = "";
    });
}

stars.forEach(star => {
    star.addEventListener('click', (e) => {
        if (isAdmin) {
            alert("Eres la autora, ¡no puedes calificar tus propios productos! 😉");
            return;
        }
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
