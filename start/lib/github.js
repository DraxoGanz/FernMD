/* 

=========================================================================

  #- Credits By Felix
   Contact: https://6285775355270
  Developer : https://wa.me/6285775355270
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/
const axios = require('axios');
const { Buffer } = require('buffer');

// Fungsi untuk Mengambil data file di GitHub
async function getFileFromGithub(githubOwner, githubRepo, githubFilePath, githubAccessToken) {
    try {
        const response = await axios.get(`https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${githubFilePath}`, {
            headers: {
                'Authorization': `token ${githubAccessToken}`,
            },
        });
        const fileData = response.data;
        const fileContent = Buffer.from(fileData.content, 'base64').toString('utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error fetching file from GitHub:', error);
        return [];
    }
}

// Fungsi untuk mengupdate file di GitHub
async function updateFileOnGithub(githubOwner, githubRepo, githubFilePath, githubAccessToken, newContent, sha) {
    try {
        const encodedContent = Buffer.from(JSON.stringify(newContent, null, 2)).toString('base64');
        
        const response = await axios.put(
            `https://api.github.com/repos/${githubOwner}/${githubRepo}/contents/${githubFilePath}`,
            {
                message: 'Update Wa.json with Bot',
                content: encodedContent,
                sha: sha,
            },
            {
                headers: {
                    'Authorization': `token ${githubAccessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error updating file on GitHub:', error);
        return null;
    }
}

module.exports = {
    getFileFromGithub,
    updateFileOnGithub
};
