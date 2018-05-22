
const token = '1454486961.4439c52.255df29293a44c4497d93deea2852bfb'

const header_data_load = (res, textStatus) => {
    self_avatar.setAttribute('src', res.data.profile_picture)
    self_username.innerHTML = res.data.username
    self_media_number.innerHTML = 'Количество постов: ' +res.data.counts.media
}

// ---------------------------------------------------------------------------------------------------------------

var loaded_counter = 0
var obj_content
var content_template = document.getElementById('template_content').innerHTML

const content_data_load = (res) => {    
    for (var i = loaded_counter; i < loaded_counter + 5; i++) {
        document.getElementsByClassName('content_main_block')[0].insertAdjacentHTML('beforeEnd', content_template)
        document.getElementsByClassName('content_img')[i].setAttribute('src', res.data[i].images.standard_resolution.url)
        if (res.data[i].caption != null) {
            document.getElementsByClassName('content_description')[i].innerHTML = res.data[i].caption.text
        }
        document.getElementsByClassName('tags_block')[i].innerHTML = res.data[i].tags.map((tag) => {return '#' +tag}).join(' ')
        document.getElementsByClassName('likes_count')[i].innerHTML = res.data[i].likes.count
        document.getElementsByClassName('comments_count')[i].innerHTML = res.data[i].comments.count

        let time_creation = new Date(parseInt(res.data[i].created_time) * 1000)
        document.getElementsByClassName('creation_time')[i].innerHTML = time_creation.toLocaleString('ru', {year: 'numeric', month: 'numeric',day: 'numeric'})
        if (i == res.data.length - 1) {
            document.getElementById('load_more_btn').style.display = 'none'
            break
        }
    }
    loaded_counter += 5
}

document.getElementById('load_more_btn').addEventListener('click', (e) => {
    console.log('event works')
    content_data_load(obj_content)
    e.preventDefault()
})

//----------------------------------------------------------------------------------------------------------------------

window.onload = function() {
    $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/self/?access_token='+token,
        headers: {
            'Access-Control-Allow-Origin': '*'
             },
        dataType: 'jsonp',
        crossDomain: true,
        success: (res, textStatus) => {
            header_data_load(res, textStatus)
            //console.log(res, textStatus)
        }
    })
    $.ajax({
        type: 'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token,
        headers: {
            'Access-Control-Allow-Origin': '*'
             },
        dataType: 'jsonp',
        crossDomain: true,
        success: (res, textStatus) => {
            obj_content = res
            content_data_load(obj_content)
            console.log(obj_content)
        }
    })
}


