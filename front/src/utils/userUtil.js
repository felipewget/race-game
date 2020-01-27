/**
 * Contem metodos para salvar e escrever dados do usuario em LocalStorage
 */

export const myData = async () => {

    let auth_token = localStorage.getItem('auth_token');
    let nickname = localStorage.getItem('nickname');
    let response = {
        success: false,
    };

    if( nickname && nickname !== undefined && auth_token && auth_token !== undefined ){

        response = {
            success: true,
            metadata: {
                token: auth_token,
                nickname: nickname
            }
        }

    }

    return response;

};

export const writeData = async ( nickname, token ) => {

    localStorage.setItem('auth_token', token );
    localStorage.setItem('nickname', nickname );

    return {
        success: true,
        metadata: {
            token: token,
            nickname: nickname
        }
    }

}