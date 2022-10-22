function songs(arr) {
    let copyOfArr = arr.slice()
    let firstElementOfArr = copyOfArr.shift()
    let lastElementOfArr = copyOfArr.pop()
    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
        songName() {
            if (this.typeList === lastElementOfArr) {
                console.log(this.name)
            } else if (lastElementOfArr === "all"){
                console.log(this.name)
            }
        }
    }
    let songs = []
    for (let i = 0; i < firstElementOfArr; i++) {
        let token = copyOfArr[i].split("_")
        let typeList = token[0]
        let name = token[1]
        let time = token[2]
        songs.push(new Song(typeList, name, time))
    }
    for (let el of songs) {
        el.songName()
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'shitty_Smooth Criminal_4:01',
    'favourite'])