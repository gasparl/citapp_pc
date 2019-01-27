describe("A suite", function() {
    //$("body").append("<div id = 'my_content'></div>");
    //console.log( $("#exp_title_id").text() );
    //document.body.innerHTML = window.__html__.index;
    console.log(window.__html__);

    $("body").append(window.__html__.index);
    //console.log( $("#my_content").text() );
    console.log( $("#exp_title_id").text() );

    //$("body").load( "../CITapp.html" );

    console.log("hi!");
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
