:root {
    --purple-bg: #9b4dca;
    --purple-dark: #662d91;
    --yellow-retro: #ffcc00;
    --pixel-border: 4px solid #000;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 20px;
    background-color: var(--purple-bg);
    background-image: linear-gradient(to bottom, #b829cb, #7a1fa2);
    font-family: 'VT323', monospace;
    font-size: 22px;
    color: #000;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

.logo {
    font-family: 'Press Start 2P', cursive;
    font-size: 28px;
    color: #fff;
    text-shadow: 4px 4px 0px var(--purple-dark), 7px 7px 0px var(--yellow-retro);
    text-transform: uppercase;
    display: inline-block;
    transform: rotate(-2deg);
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    max-width: 1400px;
    margin: 0 auto;
}

.panel {
    background: #e1bee7;
    border: var(--pixel-border);
    box-shadow: 6px 6px 0px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
}

.panel-header {
    background: var(--purple-dark);
    color: #fff;
    padding: 10px;
    font-family: 'Press Start 2P', cursive;
    font-size: 14px;
    border-bottom: var(--pixel-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-btn {
    color: red;
    cursor: pointer;
}

.panel-content {
    padding: 15px;
    flex-grow: 1;
}

.form-group {
    margin-bottom: 12px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"], input[type="password"], textarea {
    width: 100%;
    padding: 8px;
    border: 3px solid #000;
    font-family: 'VT323', monospace;
    font-size: 20px;
}

.btn-retro {
    background: var(--yellow-retro);
    border: 3px solid #000;
    padding: 10px 15px;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    cursor: pointer;
    box-shadow: 3px 3px 0px #000;
    width: 100%;
    margin-top: 10px;
}

.btn-retro:active {
    box-shadow: 0px 0px 0px #000;
    transform: translate(3px, 3px);
}

.product-img-placeholder {
    background: #fff;
    border: 3px solid #000;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin-bottom: 10px;
}

.product-title {
    margin: 5px 0;
    font-family: 'Press Start 2P';
    font-size: 14px;
}

.product-desc {
    margin: 5px 0;
    font-size: 18px;
}

.product-price {
    font-size: 26px;
    font-weight: bold;
    color: var(--purple-dark);
    margin: 5px 0;
}

.stars {
    color: #dfa500;
    font-size: 28px;
    letter-spacing: 2px;
    cursor: pointer;
}

.star {
    transition: color 0.2s;
}

.star:hover {
    color: #fff;
}

.status-text {
    font-size: 14px;
    margin: 0;
    color: #555;
}

.announcement-box {
    background: #fff;
    border: 2px solid #000;
    padding: 10px;
    margin-bottom: 15px;
}

.comment-box {
    background: #fff;
    border: 2px solid #000;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
}

.user-tag {
    color: var(--purple-dark);
    font-weight: bold;
    font-size: 18px;
}

#comments-container {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    body { padding: 10px; }
    .logo { font-size: 18px; }
    .grid-container { grid-template-columns: 1fr; }
}
