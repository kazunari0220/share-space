$(function(){
  function buildHTML(comment){
    let html = `<div class="comment-name-text-2">
                  <strong>
                    <a class = "comment-name" href=/users/${comment.user_id}>${comment.user_name}</a>：
                  </strong>
                  ${comment.text}
                </div>`
    return html;
  }
  $('#new-comment').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.comments').append(html);
      $('.comment-text').val('');
      $('.comment-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
})