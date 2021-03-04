
export interface indicesAgenda{
    empiezaDestaquem:number,
    empiezaPropers:number,
	empiezaSacaba:number,
	empiezaObert:number
}
export interface agendaDestacat{
    fecha:string,
    link:string,
	titulo:string,
	especialidad:string,
	imagen:string
}

export interface agendaDestaquem{
    destacat1:agendaDestacat,
    destacat2:agendaDestacat
}


export interface agendaPropers{
    fecha:string,
    link:string,
	titulo:string,
	especialidad:string
}