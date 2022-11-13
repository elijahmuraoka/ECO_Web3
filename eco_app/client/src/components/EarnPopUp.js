import EarnForm from "./EarnForm.js";

function EarnPopUp() {
    return (
        <div className="pop-up" id="earn-pop-up">
            <button data-close-button className="close-btn">
                &times;
            </button>
            <h2 id="claim-prompt">Claim your tokens now!</h2>
            <EarnForm />
        </div>
    );
}

export default EarnPopUp;
