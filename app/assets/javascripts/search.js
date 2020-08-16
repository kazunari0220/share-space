// $(function() {
  
//   let search_list = $(".content-box");

//   function appendTweet(post) {
//     if(post.user_sign_in && post.user_sign_in.id == post.user_id){
//       let html = ``
  
//   $(".seach-text").on("keyup", function() {
//     let input = $(".seach-text").val();
//     $.ajax({
//       type: 'GET',
//       url: '/posts/search',
//       data: { keyword: input },
//       dataType: 'json'
//     })
//     .done(function(posts) {
//       $(".content-box").empty();
//       if (post.length !== 0) {
//         posts.forEach(function(post){
//           appendPost(post);
//         });
//       }
//       else {
//         appendErrMsgToHTML("一致するツイートがありません");
//       }
//     })
//   });
// });