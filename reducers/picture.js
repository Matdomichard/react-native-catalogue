export default function(pictureList = [], action) {
    if(action.type == 'savePicture') {
        var pictureListUrl = [...pictureList]
        pictureListUrl.push(action.pictureList.secure_url)
        return pictureListUrl;
    } else {
        return pictureList;
    }
}