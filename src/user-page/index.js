import page from 'page';
import header from '../header';
import title from 'title';
import template from './template';
import empty from 'empty-element';

page('/:username', header, loadUser, function(ctx, next){
	var main = document.getElementById('main-container');
	title(`Platzigram - ${ctx.params.username}`);
	empty(main).appendChild(template(ctx.user));
})

async function loadUser(ctx, next){
	try{
		ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
		next();
	}catch(err){
		console.log(err);
	}
}