var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++)
{
    var anchor = anchors[i];
    if ('_blank' == anchor.target || '_blank')
    {
        anchor.target = '_self';
    }
}
