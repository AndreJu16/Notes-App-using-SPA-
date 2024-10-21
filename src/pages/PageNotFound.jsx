import React from 'react';
import { Link } from 'react-router-dom';

function PagesNotFound() {
    return(
        <section className="error">
            <h2>404 - Page Not Found</h2>
            <p>
                Maaf, terjadi kesalahan atau catatan anda tidak ditemukan. Silahkan Kembali ke {" "}
                <Link to="/" style={{ color: "#3498db", textDecoration: "underline"}}>
                Halaman Utama
                </Link>.
            </p>
        </section>
    )
}

export default PagesNotFound;