import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'

export const updateProfileImage =async image => {
    return new Promise( async resolve => {
        try {
            
            const fileName = image.substring(uri.lastIndexOf('/') + 1);
            const pathForFirebaseStorage = await getpathForFirebaseStorage(image);
 

            await storage().ref(fileName).putFile(pathForFirebaseStorage);
            await storage().ref(fileName).getDownloadURL().then(url => {
                resolve(url);
            });
        } catch (error) {
            
        }
    })
};

const getpathForFirebaseStorage = async uri => {
    if(Platform.OS === 'ios'){
        return uri;
    } else {
        const stat = await RNFetchBlob.fs.stat(uri);
        return stat.path;
    }
   
};