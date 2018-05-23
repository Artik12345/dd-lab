'use strict'

$(document).ready(function() {

    const token = '1454486961.4439c52.255df29293a44c4497d93deea2852bfb'

    const header_data_load = (res, textStatus) => {
    self_avatar.setAttribute('src', res.data.profile_picture)
    self_username.innerHTML = res.data.username
    self_media_number.innerHTML = 'Количество постов: ' +res.data.counts.media
    }

// ---------------------------------------------------------------------------------------------------------------

    var loaded_counter = 0,
        obj_content,
        content_template = document.getElementById('template_content').innerHTML

    const content_data_load = (res) => {
        let content_main_block_ = document.getElementsByClassName('content_main_block'),
            content_img_ = document.getElementsByClassName('content_img'),
            content_description_ = document.getElementsByClassName('content_description'),
            tags_block_ = document.getElementsByClassName('tags_block'),
            likes_count_ = document.getElementsByClassName('likes_count'),
            comments_count_ = document.getElementsByClassName('comments_count'),
            creation_time_ = document.getElementsByClassName('creation_time'),
            i

        for (i = loaded_counter; i < loaded_counter + 5; i++) {
            content_main_block_[0].insertAdjacentHTML('beforeEnd', content_template)
            content_img_[i].setAttribute('src', res.data[i].images.standard_resolution.url)
            if (res.data[i].caption != null) {
                content_description_[i].innerHTML = res.data[i].caption.text
            }
            tags_block_[i].innerHTML = res.data[i].tags.map((tag) => {return '#' +tag}).join(' ')
            likes_count_[i].innerHTML = res.data[i].likes.count
            comments_count_[i].innerHTML = res.data[i].comments.count

            let time_creation = new Date(parseInt(res.data[i].created_time, 10) * 1000)
            creation_time_[i].innerHTML = time_creation.toLocaleString('ru', {year: 'numeric', month: 'numeric',day: 'numeric'})
            if (i == res.data.length - 1) {
                document.getElementById('load_more_btn').style.display = 'none'
                break
            }
        }
        loaded_counter += 5
    }

    document.getElementById('load_more_btn').addEventListener('click', (e) => {
        content_data_load(obj_content)
        e.preventDefault()
    })

    //----------------------------------------------------------------------------------------------------------------------
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
            }
        })
})

    